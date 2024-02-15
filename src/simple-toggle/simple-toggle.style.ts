// language=CSS
import { css } from 'lit';

export default css`
    :host {

        --simpleToggleHeight: 2rem;
        --simpleToggleWidth: 4rem;
        --simpleToggleColor: #000;
        --simpleToggleOutlineColor: #ff0000;

        --simpleKnobSize: calc(var(--simpleToggleHeight) - 2px);

        height: var(--simpleToggleHeight);
        vertical-align: bottom;
        display: inline-block;
        user-select: none;
    }

    .switch {
        position: relative;
        display: inline-block;
        width: var(--simpleToggleWidth);
        height: var(--simpleToggleHeight);
        border-radius: var(--simpleToggleHeight);
    }

    .switch:has(input:focus-visible:not(.no-focus-visible)) {
        outline: 3px solid var(--simpleToggleOutlineColor);
    }

    .switch input {
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0,0,0,0) !important;
        white-space: nowrap !important;
        border: 0 !important;
        position: absolute !important;
    }

    .switch input:checked + .slider {
        background-color: var(--simpleToggleColor);
    }

    .switch input:focus + .slider {
        box-shadow: 0 0 1px var(--simpleToggleColor);
    }

    .switch input:checked + .slider:before {
        transform: translateX(var(--simpleKnobSize));
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: .4s;
    }
    .slider:before {
        position: absolute;
        content: "";
        height: var(--simpleKnobSize);
        width: var(--simpleKnobSize);
        left: 1px;
        bottom: 1px;
        background-color: white;
        transition: .4s;
    }

    .slider.slider.round {
        border-radius: var(--simpleToggleHeight);
    }

    .slider.slider.round:before {
        border-radius: 50%;
    }
`;
