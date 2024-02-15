import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './simple-form/simple-form.component';
import './simple-form-input/simple-form-input.component';
import './simple-calendar/simple-calendar.component';
import './simple-dialog/simple-dialog.component';
import { SimpleForm } from './simple-form/simple-form.component';
import { SimpleCalendar } from './simple-calendar/simple-calendar.component';
import { SimpleDialog } from './simple-dialog/simple-dialog.component';

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

    private showDialog() {
        this.shadowRoot?.querySelector('simple-dialog')?.open();
    }

    override render() {
        return html`
            <h2>Simple Calendar</h2>
            <simple-calendar></simple-calendar>

            <h2>Simple Dialog</h2>
            <button @click=${this.showDialog}>
                Open dialog
            </button>
            <simple-dialog>
                <div slot="dialog-header">
                    <h2>Hello there!</h2>
                </div>
                <p>This is an example of Custom element-based dialog.</p>
            </simple-dialog>

            <h2>Simple Form</h2>
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
        'simple-form': SimpleForm;
        'simple-calendar': SimpleCalendar;
        'simple-dialog': SimpleDialog;
  }
}

