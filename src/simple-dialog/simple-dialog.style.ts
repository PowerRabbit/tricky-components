// language=CSS
import { css } from 'lit';

export default css`
    :host {

        --simpleDialogPosition: fixed;
        --simpleDialogTop: 1rem;
        --simpleDialogPadding: 1rem;
        --simpleDialogMinWidth: 40vw;
        --simpleDialogBorder: none;
        --simpleDialogBorderRadius: 0.5rem;
        --simpleDialogBackdropColor: #000000;
        --simpleDialogBackdropOpacity: 0.5;

        --dialogCloseButtonBorder: none;
        --dialogCloseButtonBorderRadius: 50%;
        --dialogCloseButtonColor: #000000;
        --dialogCloseButtonBgColor: #ffffff;
        --dialogCloseButtonFontSize: 1.5rem;
        --dialogCloseButtonLineHeight: 1.1;

        --dialogCloseButtonBgColorHover: #000000;
        --dialogCloseButtonColorHover: #ffffff;
        --dialogCloseButtonOutlineColor: #000000;

        display: block;

    }
    dialog {
        border: var(--simpleDialogBorder);
        border-radius: var(--simpleDialogBorderRadius);
        min-width: var(--simpleDialogMinWidth);
        padding: var(--simpleDialogPadding);
        position: var(--simpleDialogPosition);
        top: var(--simpleDialogTop);
    }

    .content-wrapper {
        display: flex;
    }

    .dialog-header {
        flex: 1 0 auto;
    }

    .close-button-wrapper button {
        appearance: none;
        background-color: var(--dialogCloseButtonBgColor);
        border: var(--dialogCloseButtonBorder);
        border-radius: var(--dialogCloseButtonBorderRadius);
        color: var(--dialogCloseButtonColor);
        cursor: pointer;
        font-size: var(--dialogCloseButtonFontSize);
        line-height: var(--dialogCloseButtonLineHeight);
        outline: none;

        &:hover {
            background-color: var(--dialogCloseButtonBgColorHover);
            color: var(--dialogCloseButtonColorHover);
        }
        &:focus-visible {
            box-shadow: 0 0 0 3px var(--dialogCloseButtonOutlineColor);
        }
    }

    .close-button-wrapper button:hover {

        background-color: var(--dialogCloseButtonBgColorHover);
        color: var(--dialogCloseButtonColorHover);

        &:focus-visible {
            box-shadow: 0 0 0 3px var(--dialogCloseButtonOutlineColor);
        }
    }

    .close-button-wrapper button:focus-visible {
        box-shadow: 0 0 0 3px var(--dialogCloseButtonOutlineColor);
    }

    .backdrop {
        background-color: var(--simpleDialogBackdropColor);
        opacity: var(--simpleDialogBackdropOpacity);
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
`;
