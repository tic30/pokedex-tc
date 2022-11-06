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
            flexGrow: 1,
        }
    },
    search: {
        width: ['100%', 'auto', 'auto'],
        '& .MuiOutlinedInput-notchedOutline': {
            borderRadius: 3,
        }
    },
    gridListToggle: {
        borderRadius: 3,
        flexGrow: 0,
        'button': {
            width: '50%',
            borderRadius: 3,
        }
    }
};

export default styles;
