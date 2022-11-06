import { CSSObject } from "../../types";
import { blueGrey } from '@mui/material/colors';

const styles: CSSObject = {
    listWrapper: {
        flexGrow: 1,
        overflowY: 'auto',
    },
    list: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: 2,
        p: 2,
        backgroundColor: blueGrey[50]
    }
};

export default styles;
