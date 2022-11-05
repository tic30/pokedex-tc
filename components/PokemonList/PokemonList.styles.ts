import { CSSObject } from "../../types";
import { blueGrey } from '@mui/material/colors';

const styles: CSSObject = {
    list: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1rem',
        backgroundColor: blueGrey[50]
    }
};

export default styles;
