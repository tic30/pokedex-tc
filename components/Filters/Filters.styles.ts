import { CSSObject } from "../../types";

const styles: CSSObject = {
    wrapper: {
        position: 'relative',
        boxShadow: 2,
    },
    secondRow: {
        p: 2,
        display: 'flex',
        gap: 2,
        flexWrap: 'wrap',
        '> *': {
            flexGrow: 1
        }
    },
    gridListToggle: {
        flexGrow: 0,
        'button': {
            width: '50%'
        }
    }
};

export default styles;
