import { LitElement, html } from 'lit';
import { customElement, property  } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './simple-toggle.style';

export const simpleChange = 'simpleChange';

@customElement('simple-toggle')
export class SimpleToggle extends LitElement {
    static override styles = styles;

    @property({ type: String, attribute: 'simple-external-label-id' })
        simpleExternalLabelId?: string;

    @property({ type: String, attribute: 'simple-title' })
        simpleTitle?: string;

    @property({ type: String, attribute: 'simple-aria-label' })
        simpleAriaLabel?: string;

    @property({ type: Boolean, attribute: 'simple-checked' })
        simpleChecked = false;

    @property({ type: Boolean, attribute: 'simple-disabled' })
        simpleDisabled = false;

    private outerLabel?: HTMLLabelElement;

    private handleLabelClick = (e: Event) => {
        if (e.target !== this) {
            this.click();
        }
    };

    override connectedCallback(): void {
        super.connectedCallback();
        this.addEventListener('click', () => {
            const input = this.shadowRoot!.querySelector('input') as HTMLInputElement;
            input.classList.add('no-focus-visible');
            input.focus();
            input.click();
        });

        if (this.simpleExternalLabelId) {
            if (this.parentNode?.nodeType === 11) {
                this.outerLabel = (this.parentNode as DocumentFragment).getElementById(this.simpleExternalLabelId) as HTMLLabelElement;
            } else {
                this.outerLabel = document.getElementById(this.simpleExternalLabelId) as HTMLLabelElement;
            }
        } else {
            this.outerLabel = this.closest('label') as HTMLLabelElement;
            if (this.outerLabel && !this.simpleAriaLabel) {
                const labelText = this.outerLabel.innerText;
                if (labelText) {
                    this.simpleAriaLabel = labelText;
                }
            }
        }
        if (this.outerLabel) {
            this.outerLabel.addEventListener('click', this.handleLabelClick);
        }
    }

    override disconnectedCallback(): void {
        if (this.outerLabel) {
            this.outerLabel.removeEventListener('click', this.handleLabelClick);
        }
    }

    protected override firstUpdated(): void {
        const input = this.shadowRoot!.querySelector('input') as HTMLInputElement;
        input.addEventListener('click', (e: Event) => {
            e.stopImmediatePropagation();
        });
        input.addEventListener('blur', () => {
            input.classList.remove('no-focus-visible');
        });
    }

    private onValueChanged(e: Event) {
        this.dispatchEvent(new CustomEvent(simpleChange, {
            detail: (e.target as HTMLInputElement).checked,
        }));
    }

    protected override render() {
        return html`
            <div class="switch">
                <input type="checkbox"
                       title=${ifDefined(this.simpleTitle)}
                       aria-label=${ifDefined(this.simpleAriaLabel)}
                       .checked=${this.simpleChecked}
                       .disabled=${this.simpleDisabled}
                       @change=${this.onValueChanged}
                       role="switch">
                <span class="slider round"></span>
            </div>
        `;
    }
}
