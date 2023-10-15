import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { SimpleFormInput } from "../simple-form-input/simple-form-input.component";

type FormType = SimpleFormInput;

@customElement('simple-form')
export class SimpleForm extends LitElement {

    @state()
    private formElements: Set<FormType> = new Set();

    override connectedCallback() {
        super.connectedCallback();
        this.addEventListener('simpleFormInput_Connected', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            this.formElements.add(e.target as FormType);
        });
        this.addEventListener('change', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
        });
        this.addEventListener('keydown', (e) => {
            if (e.target instanceof SimpleFormInput && e.key === 'Enter') {
                e.preventDefault();
                e.stopImmediatePropagation();
                this.submitForm();
            }
        });
    }

    public submitForm(): void {
        const data = this.createFormData();
        this.dispatchEvent(new CustomEvent('formSubmit', {
            bubbles: true,
            detail: data,
        }));
    }

    private createFormData(): FormData {
        const form = document.createElement('form');
        Array.from(this.formElements).forEach(item => {
            if (item instanceof SimpleFormInput) {
                const input = item.shadowRoot!.querySelector('input')!.cloneNode();
                form.appendChild(input);
            }
        });
        return new FormData(form);
    }

    override render() {
        return html`
        <form id="aaa">
            <slot></slot>
        </form>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'simple-form': SimpleForm;
  }
}

