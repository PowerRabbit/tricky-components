import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './simple-form/simple-form.component';
import './simple-form-input/simple-form-input.component';

@customElement('my-element')
export class MyElement extends LitElement {
    static override styles = css`
        :host {
            display: block;
            border: solid 1px gray;
            padding: 16px;
            max-width: 800px;
        }
    `;

    private onFormSubmit(e: CustomEvent<FormData>) {
        console.log(JSON.stringify(Array.from(e.detail), null, 4));
    }

    override render() {
        return html`
            <simple-form @formSubmit=${this.onFormSubmit}>
                <simple-form-input name="input 1"></simple-form-input>
                <simple-form-input name="input 2" @change=${() =>{console.log('Custom event handler!');} }></simple-form-input>
                <simple-form-input name="input 3" @focus=${(e: Event) =>{console.log(e);} }></simple-form-input>
            </simple-form>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'my-element': MyElement;
  }
}

