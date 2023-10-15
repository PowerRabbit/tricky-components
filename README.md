# An conceptual implementation of some tricky custom elements

## Available elements
### [Simple form](https://github.com/PowerRabbit/tricky-components/tree/master/src/simple-form)
- Requires [Simple form input](https://github.com/PowerRabbit/tricky-components/tree/master/src/simple-form-input)
- Emits [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) on submit.
```Typescript
<simple-form @formSubmit=${this.onFormSubmit}>
    <simple-form-input name="input 1"></simple-form-input>
    <simple-form-input name="input 2" @change=${() =>{console.log('Custom event handler!');} }></simple-form-input>
    <simple-form-input name="input 3" @focus=${(e: Event) =>{console.log(e);} }></simple-form-input>
</simple-form>
```