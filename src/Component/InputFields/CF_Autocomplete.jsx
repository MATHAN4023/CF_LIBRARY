import { Autocomplete, Paper, TextField } from '@mui/material';

const CF_Autocomplete = () => {
    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 }
    ]
    return (
        <>
            <Autocomplete
                options={top100Films}
                getOptionLabel={(option) => option.title}
                sx={{ width: 300 }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Movie"
                        sx={{
                            '.MuiOutlinedInput-root': {
                                borderRadius: '10px',
                                height: '40px'
                            },
                            '& .MuiInputLabel-root': {
                                transform: 'translate(15px, 6px) scale(1)', // Adjust label position
                            },
                            '& .MuiInputLabel-shrink': {
                                transform: 'translate(15px, -7px) scale(0.75)', // Adjust label shrink position
                            }
                        }}
                    />
                )}
                PaperComponent={(props) => (
                    <Paper
                        {...props}
                        sx={{
                            borderRadius: '10px'
                        }}
                    />
                )}
            />
        </>
    )
}

export default CF_Autocomplete;