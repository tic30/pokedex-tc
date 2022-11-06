import { CSSObject } from "../../types";
import { grey } from '@mui/material/colors';

const styles: CSSObject = {
    card: {
        borderRadius: 3,
    },
    image: {
        width: '70%',
        height: '10rem',
        margin: 'auto',
        objectFit: 'contain'
    },
    content: {
        backgroundColor: grey[50]
    },
    titleWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
};

export default styles;
