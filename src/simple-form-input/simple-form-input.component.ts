import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

const eventProperties = {
    bubbles: true,
};

@customElement('simple-form-input')
export class SimpleFormInput extends LitElement {

    @property()
        name = '';

    static override styles = css`
        :host {
            display: block;
            margin-bottom: 0.5rem;
        }
    `;

    override connectedCallback() {
        super.connectedCallback();
        if (!this.name) {
            throw new Error('The name property must be provided for the simple-form-input!');
        }
        this.dispatchEvent(new CustomEvent('simpleFormInput_Connected', eventProperties));
    }

    private dispatch(e: Event) {
        e.stopImmediatePropagation();
        e.preventDefault();
        if (e instanceof FocusEvent) {
            this.dispatchNative('focus');
        } else {
            if ((e instanceof Event) && typeof e.type === 'string') {
                this.dispatchNative(e.type);
            }
        }
    }

    private dispatchNative(eventName: string) {
        this.dispatchEvent(new CustomEvent(eventName, eventProperties));
    }

    override render() {
        return html`
            <input type="text"
                name="${this.name}"
                @focus=${this.dispatch}
                @change=${this.dispatch}>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'simple-form-input': SimpleFormInput;
  }
}

