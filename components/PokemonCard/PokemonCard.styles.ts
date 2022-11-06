import { CSSObject } from "../../types";
import { grey } from '@mui/material/colors';

const styles: CSSObject = {
    card: {
        borderRadius: 3,
        display: 'flex',
        flexDirection: 'column'
    },
    image: {
        width: '70%',
        height: '10rem',
        margin: 'auto',
        objectFit: 'contain'
    },
    content: {
        flexGrow: 1,
        pr: 1,
        backgroundColor: grey[50]
    },
    titleWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        display: 'flex',
        gap: 2
    },
    titleId: {
        color: grey[600]
    },
    cpWrapper: {
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        mt: 1,
    },
    cpBar: {
        flexGrow: 1,
        height: '1rem',
        borderRadius: 5,
    },
    statsWrapper: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: 2,
        mt: 3,
    },
    statsCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1,
        p: 3,
        borderRadius: 3,
    },
    evolutionTitle: {
        mt: 3,
        mb: 2
    },
    evolutions: {
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        '> div': {
            flexBasis: '100%'
        }
    }
};

export const compressedStyles: CSSObject = {
    card: {
        ...styles.card,
        flexDirection: 'row'
    },
    imageWrapper: {
        width: '10rem',
    },
    image: {
        ...styles.image,
        height: '5rem',
    },
    content: {
        ...styles.content,
        flexGrow: 1,
        pl: 4,
        ':last-child': {
            pb: 2
        }
    }
};

export default styles;
