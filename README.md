# An conceptual implementation of some custom elements

## Available elements
### [Simple calendar](https://github.com/PowerRabbit/tricky-components/tree/master/src/simple-calendar)
```HTML
<simple-calendar></simple-calendar>
```

### [Simple form](https://github.com/PowerRabbit/tricky-components/tree/master/src/simple-form)
- Requires [Simple form input](https://github.com/PowerRabbit/tricky-components/tree/master/src/simple-form-input)
- Emits [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) on submit.
```HTML
<simple-form @formSubmit=${this.onFormSubmit}>
    <simple-form-input name="input 1"></simple-form-input>
    <simple-form-input name="input 2" @change=${() =>{console.log('Custom event handler!');} }></simple-form-input>
    <simple-form-input name="input 3" @focus=${(e: Event) =>{console.log(e);} }></simple-form-input>
</simple-form>
```

### [Simple dialog](https://github.com/PowerRabbit/tricky-components/tree/master/src/simple-dialog)
```HTML
<simple-dialog>
    <div slot="dialog-header">
        <h2>Hello there!</h2>
    </div>
    <p>This is an example of Custom element-based dialog.</p>
</simple-dialog>
```

### [Simple toggle](https://github.com/PowerRabbit/tricky-components/tree/master/src/simple-toggle)
```HTML
<simple-toggle></simple-toggle>

<label>
    Press me
    <simple-toggle></simple-toggle>
</label>

<label id="externalLabelId">and me</label>, press me as well!
<simple-toggle simple-external-label-id="externalLabelId"></simple-toggle>
```

### [Simple accordion](https://github.com/PowerRabbit/tricky-components/tree/master/src/simple-accordion)
- Requires [Simple accordion item](https://github.com/PowerRabbit/tricky-components/tree/master/src/simple-accordion-item)
```HTML
<simple-accordion>
    <simple-accordion-item sa-open>
        <div slot="summary">Item 1</div>
        <p>Item 1 description.</p>
    </simple-accordion-item>
    <simple-accordion-item>
        <div slot="summary">Item 2</div>
        <p>Item 2 description.</p>
    </simple-accordion-item>
</simple-accordion>
```
