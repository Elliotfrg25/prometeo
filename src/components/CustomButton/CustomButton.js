// CustomButton.js
import { styled, useTheme } from '@mui/system';
import { Button } from '@mui/material';

const CustomButton = (props) => {
    const theme = useTheme();

    const StyledButton = styled(Button)(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
        borderRadius: '8px',
        padding: '8px 16px',
    }));

    return <StyledButton {...props} />;
};

export default CustomButton;
