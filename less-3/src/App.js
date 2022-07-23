import React, { useEffect, useRef, useState } from 'react';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import Icon from '@material-ui/core/Icon';
import { green, lightGreen} from '@material-ui/core/colors';
import {  yellow } from '@mui/material/colors';



const theme = createTheme( {  

    palette: {      
      primary: {
        light: green[100],
        main: green[800],  
        contrastText: yellow[50]     
      },   
     
    },
  }
);


 

function App() {

  const [reviewList, setReviewList] = useState([]);
  const ref = useRef ('null');

  const createId = () => {
   return Math.random();
  }


  function postReview (event) {
    event.preventDefault();
    const target = event.target;
    const author = target.author.value;
    const text = target.text.value;
    

       setReviewList ( data => [...data, {
       id:createId(),
       author: author,
       text: text
      
    }]);
   
  }
  
 const notice = () => {
  const lastReview = reviewList[reviewList.length -1];
  if(lastReview && lastReview.author){
    setReviewList ( data => [...data, {
      id: createId(),
      text: `${lastReview.author}, благодарим Вас за отзыв!`
    }])
  } 
  
 }

 useEffect( () => {
  setTimeout ( () => {
    notice();
    ref.current.focus();
    ref.current.value = '';
     }, 1000);
 }, [reviewList]);
 
 const style = {
  p: 3,
  mb: 3,
  boxShadow: 1, 
  backgroundColor: lightGreen[50]
}


  return (
    <ThemeProvider theme={theme}>
      <Container >
        <Box  component = 'form' noValidate autoComplete ='off'  sx={{mb:4}}  display = 'flex' flexDirection= 'column' onSubmit = {postReview}> 
         <TextField 
         id = 'name'
         name='author'
         label = 'Aвтор' 
         variant="outlined"
         sx={{mb: 2, mt: 3}} 
    
         />        

         <TextField
          id="review"
          name = 'text'
          label='Ваш отзыв'
          multiline
          rows={4}         
          variant="outlined"
          sx={{mb: 2}}
          inputRef={ref}
        />    

        <Button
          type='submit'
          variant="contained"
          color="primary"
          endIcon={<Icon>send</Icon>}>
          Отправить
        </Button>     
        </Box>   
       
            { reviewList.map(review => <Box key={review.id} sx={style} >
                {review.author && <Typography gutterBottom variant="h5" component="h2">{review.author}</Typography>}
              <Typography> {review.text}</Typography>
                      
              </Box>
            )}
       
      </Container>
    </ThemeProvider>
  );
 }


export default App;
