// language=CSS
import { css } from 'lit';

export default css`
    :host {

    --simpleAccordionItemListStyle: none;
    --simpleAccordionItemElementsPadding: 1rem 1rem 1rem 1rem;
    --simpleAccordionItemOutlineColor: #ff0000;

    --simpleAccordionItemSummaryBorder: 1px transparent solid;
    --simpleAccordionItemSummaryBgColor: #000000;
    --simpleAccordionItemSummaryColor: #ffffff;

    --simpleAccordionItemSummaryBorderHover: 1px var(--simpleAccordionItemSummaryBgColor) solid;
    --simpleAccordionItemSummaryBgColorHover: #484747;
    --simpleAccordionItemSummaryColorHover: #ffffff;

    --simpleAccordionItemSummaryBorderOpen: var(--simpleAccordionItemSummaryBorder);
    --simpleAccordionItemSummaryBgColorOpen: var(--simpleAccordionItemSummaryBgColor);
    --simpleAccordionItemSummaryColorOpen: var(--simpleAccordionItemSummaryColor);

    --simpleAccordionItemContentBgColor: none;
    --simpleAccordionItemContentColor: auto;
    --simpleAccordionItemContentBorderWidth: 0 1px 1px 1px;
    --simpleAccordionItemContentBorderStyle: solid;
    --simpleAccordionItemContentBorderColor: var(--simpleAccordionItemSummaryBgColor);
}

summary {
    background-color: var(--simpleAccordionItemSummaryBgColor);
    border: var(--simpleAccordionItemSummaryBorder);
    color: var(--simpleAccordionItemSummaryColor);

    cursor: pointer;
    list-style: var(--simpleAccordionItemListStyle);
    padding: var(--simpleAccordionItemElementsPadding);

    outline: none;
}
summary:hover,
summary:focus-visible {
    background-color: var(--simpleAccordionItemSummaryBgColorHover);
    border: var(--simpleAccordionItemSummaryBorderHover);
    color: var(--simpleAccordionItemSummaryColorHover);
}
summary:focus-visible {
    outline: 3px var(--simpleAccordionItemOutlineColor) solid;
}
summary span {
    display: inline-block;
}

.content-wrapper {
    background-color: var(--simpleAccordionItemContentBgColor);
    color: var(--simpleAccordionItemContentColor);
    padding: var(--simpleAccordionItemElementsPadding);
    border-width: var(--simpleAccordionItemContentBorderWidth);
    border-style: var(--simpleAccordionItemContentBorderStyle);
    border-color: var(--simpleAccordionItemContentBorderColor);
}

details[open] {
    summary {
        background-color: var(--simpleAccordionItemSummaryBgColorOpen);
        border: var(--simpleAccordionItemSummaryBorderOpen);
        color: var(--simpleAccordionItemSummaryColorOpen);
    }
}
`;
