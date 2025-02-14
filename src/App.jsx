import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Box, Card, CardContent, CardCover, Typography } from '@mui/joy';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Box>
        <Typography
          textAlign="justify"
          marginX={1}
          marginTop={5}
          level="h1"
          textColor="34312D"
          variant="soft"
          color="warning"
        >
          Esta Carta es para la niña más hermosa de todo el mundo &lt;3
        </Typography>
        <Box marginX={1} marginTop={5}>
          <Card variant="soft" color="warning">
            <CardContent>
              <Typography level="h3">De: Mikel (lechi)</Typography>
              <Typography level="h3">Para: Ximena (mi estrellita)</Typography>
            </CardContent>
          </Card>
          <Typography level="h3" marginTop={1}>
            Antes de amar al amor de mi vida...
          </Typography>
          <Typography>
            Bueno, ya un año que nos conocimos, desde el 7 de diciembre de 2023, cuando me mandaste un gif
          </Typography>
          <Box marginX={1} marginTop={1}>
            <Card variant="soft" color="warning" sx={{ minHeight: 200, minWidth: 300, height: 200, width: 300 }}>
              <CardCover>
                <img
                  src="https://i.imgur.com/uCIHFNL.png"
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'fill' }} // Ajustar estilo de la imagen
                />
              </CardCover>
              <CardContent>
                <Typography
                  level="h4"
                  textAlign={'justify'}
                  textColor="#34312D"
                  sx={{ fontWeight: 'lg', mt: { xs: 28, sm: 28} }}
                >
                  "Es tan solo un hola, ¿qué podría pasar?"
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
        <Typography marginX={1} marginTop={10}>
          Recuerdo cuando recibi tu primer mensaje, realmente fue raro, porque llevaba tiempo sin usar discord
          y se me hizo algo lindo que reciba ese mensaje
        </Typography>
         <Typography level="h3" marginTop={4} marginX={1}>
            Hablar sobre 4chan..
          </Typography>
        <Box marginX={1} marginTop={1}>
            <Card variant="soft" color="warning" sx={{ minHeight: 200, minWidth: 300, height: 200, width: 300 }}>
              <CardCover>
                <img
                  src="https://i.imgur.com/2NsLkjq.png"
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'fill' }} // Ajustar estilo de la imagen
                />
              </CardCover>
              <CardContent>
                <Typography
                  marginX={1}
                  level="h4"
                  textAlign={'justify'}
                  textColor="#34312D"
                  sx={{ fontWeight: 'lg', mt: { xs: 28, sm: 28} }}
                >
                  "La yuki me esta hablando de 4chan, vamos a mostrarselo"
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Typography marginTop={10} marginX={1}>
            Me preguntó algo sobre 4chan, vamos a escribirle al privado para seguir hablando de eso y al menos matar el aburrimiento
          </Typography>
                   <Typography level="h3" marginTop={4} marginX={1}>
            Nunca dudes en escribirme..
          </Typography>
        <Box marginX={1} marginTop={1}>
            <Card variant="soft" color="warning" sx={{ minHeight: 200, minWidth: 300, height: 200, width: 300 }}>
              <CardCover>
                <img
                  src="https://i.imgur.com/Sduxxgq.png"
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'fill' }} // Ajustar estilo de la imagen
                />
              </CardCover>
              <CardContent>
                <Typography
                  marginX={1}
                  level="h4"
                  textAlign={'justify'}
                  textColor="#34312D"
                  sx={{ fontWeight: 'lg', mt: { xs: 28, sm: 28} }}
                >
                  "¿Te quiero, va?"
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Typography marginTop={6} marginX={1}>
            Desapareci unos meses de internet, habia estado en un momento algo dificil en mi vida
            personal, me motivé a abrir discord, lo primero que veo es un mensaje de esa chica que
            no conocia tan de cerca pero realmente me llamaba la atencion, en ese mensaje, habla de
            que no se ha sentido mal y que realmente se sentia sola, yo le comente que aun tiene mucho
            por hacer y que realmente las estrellas brillan por lo que lo hacen brillar, al final de mensaje
            le digo "Te quiero, va?"
          </Typography>

          <Typography level="h3" marginTop={4} marginX={1}>
            Estoy muy orgulloso de tii...
          </Typography>
        <Box marginX={1} marginTop={1}>
            <Card variant="soft" color="warning" sx={{ minHeight: 300, minWidth: 300, height: 300, width: 300 }}>
              <CardCover>
                <img
                  src="https://i.imgur.com/MS6ATES.png"
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'fill' }} // Ajustar estilo de la imagen
                />
              </CardCover>
              <CardContent>
                <Typography
                  marginX={1}
                  level="h4"
                  textAlign={'justify'}
                  textColor="#34312D"
                  sx={{ fontWeight: 'lg', mt: { xs: 41, sm: 41} }}
                >
                  "eso yukiiiii"
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Typography marginTop={6} marginX={1}>
            Yuki me comentó que queria comprarse el discord nitro, a los pocos dias me escribio y me dijo que logro comprarselo,
            me siento muy orgulloso de ella, pero no por el nitro, me sentia orgulloso porque sentia que esa niña estaba mas feliz
            en comparacion al dia en el que me escribio diciendome que se sentia mal  
          </Typography>

          <Typography level="h3" marginTop={4} marginX={1}>
            Me siento muy seguro con Yuki...
          </Typography>
        <Box marginX={1} marginTop={1}>
            <Card variant="soft" color="warning" sx={{ minHeight: 200, minWidth: 300, height: 200, width: 300 }}>
              <CardCover>
                <img
                  src="https://i.imgur.com/WBgBFBE.png"
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'fill' }} // Ajustar estilo de la imagen
                />
              </CardCover>
              <CardContent>
                <Typography
                  marginX={1}
                  level="h4"
                  textAlign={'justify'}
                  textColor="#34312D"
                  sx={{ fontWeight: 'lg', mt: { xs: 28, sm: 28} }}
                >
                  "Te diré que te ganaste un lugar en mi corazon"
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Typography marginTop={10} marginX={1}>
            Siento muchas con Yuki, ella me hace sentir muy seguro y a veces siento que tenemos muchas cosas
            en común y lo que me hace muy feliz es que realmente sienta que uno esta para el otro
          </Typography>


          <Typography level="h3" marginTop={4} marginX={1}>
            Quiero hacerla sentir especial...
          </Typography>
        <Box marginX={1} marginTop={1}>
            <Card variant="soft" color="warning" sx={{ minHeight: 70, minWidth: 300, height:70, width: 300 }}>
              <CardCover>
                <img
                  src="https://i.imgur.com/wVEkmUK.png"
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'fill' }} // Ajustar estilo de la imagen
                />
              </CardCover>
              <CardContent>
                <Typography
                  marginX={1}
                  level="h4"
                  textAlign={'justify'}
                  textColor="#34312D"
                  sx={{ fontWeight: 'lg', mt: { xs: 12, sm: 12} }}
                >
                  "Me encanta hablar con ella y me encanta como es ella"
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Typography marginTop={10} marginX={1}>
            ME DIJO Q SE SENTIA ESPECIAL CONMIGO!!!
          </Typography>

          <Typography level="h3" marginTop={4} marginX={1}>
            Nuestras iniciales juntas suenan lindas...
          </Typography>
        <Box marginX={1} marginTop={1}>
            <Card variant="soft" color="warning" sx={{ minHeight: 120, minWidth: 300, height:120, width: 300 }}>
              <CardCover>
                <img
                  src="https://i.imgur.com/mbdIiNw.png"
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'fill' }} // Ajustar estilo de la imagen
                />
              </CardCover>
              <CardContent>
                <Typography
                  marginX={1}
                  level="h4"
                  textAlign={'justify'}
                  textColor="#34312D"
                  sx={{ fontWeight: 'lg', mt: { xs: 18, sm: 18} }}
                >
                  "Su nombre es muy lindoo, quiero que este junto al mio"
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Typography marginTop={10} marginX={1}>
            Parece que ya no es yuki, ahora es ximena
          </Typography>
         

          <Typography level="h3" marginTop={4} marginX={1}>
            LE GUSTO A LA QUE ME GUSTA
          </Typography>
        <Box marginX={1} marginTop={1}>
            <Card variant="soft" color="warning" sx={{ minHeight: 420, minWidth: 300, height:420, width: 300 }}>
              <CardCover>
                <img
                  src="https://i.imgur.com/JyuFMAL.jpeg"
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'fill' }} // Ajustar estilo de la imagen
                />
              </CardCover>
              <CardContent>
                <Typography
                  marginX={1}
                  level="h4"
                  textAlign={'justify'}
                  textColor="#34312D"
                  sx={{ fontWeight: 'lg', mt: { xs: 57, sm: 57} }}
                >
                  "Me gané el mundo, pero el mundo, está en sus ojitos tan lindos"
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Typography marginTop={15} marginX={1}>
            AMO A MI CHICA, ES LA MAS LINDA DE TODOO EL MUNDO
          </Typography>
         
          <Typography
          textAlign="justify"
          marginX={1}
          marginTop={5}
          level="h1"
          textColor="34312D"
          variant="soft"
          color="warning"
        >
          ESTA CARTA ES PARA LA NIÑA MAS LINDA DE TODO EL MUNDO
        </Typography>

        <Typography margin={2}>
          Realmente esta carta la inicio con muchos sentimientos encima, pues cada dia noto que te amo más y más y
          siento que la mejor forma de expresar mi amor es darte una carta programada
        </Typography>
        
        <Typography
          textAlign="justify"
          marginX={1}
          marginTop={1}
          level="h1"
          textColor="34312D"
          variant="soft"
          color="warning"
        >
          QUIERO DECIRTE QUE
        </Typography>
        <Typography margin={2}>
          Eres la chica mas hemosa que he conocido, sinceramente tus ojos son los mas bellos de todo el mundo y
          siento que quiero vivir en ellos, tu nariz aunque te la tapes es linda PQ ERES LA NIÑA MAS HERMOSA DEL
          TODOOO EL MUNDO
        </Typography>      
        <Typography
          textAlign="justify"
          marginX={1}
          marginTop={1}
          level="h1"
          textColor="34312D"
          variant="soft"
          color="warning"
        >
          ME ENCANTA...
        </Typography>
        <Typography margin={2}>
          ME ENCANTA HABLAR CONTIGO, ME ENCANTA JUGAR ROBLOX CONTIGO Y LO QUE MAS AMO ES CUANDO TE PREGUNTO EN LLAMADA "¿ME AMAS?"
          Y ME RESPONDES "MUCHO", TU VOZ ES TAN LINDA, QUIERO ESCUCHARLA TODA MI VIDA 
        </Typography>  

                <Typography
          textAlign="justify"
          marginX={1}
          marginTop={1}
          level="h1"
          textColor="34312D"
          variant="soft"
          color="warning"
        >
          SIENDOTE SINCERO
        </Typography>
        <Typography margin={2}>
          ME HACES SENTIR EL CHICO MAS AFORTUNADO CUANDO TE HABLO Y CUANDO JUGAMOS JUNTOS CON SOLO TU COMPAÑIA ME HACES
          EL CHICO MAS FELIZ DEL MUNDO
        </Typography>   



        <Typography
          textAlign="justify"
          marginX={1}
          marginTop={1}
          level="h1"
          textColor="34312D"
          variant="soft"
          color="warning"
        >
          ME ESTOY MUERIENDO DE AMOR
        </Typography>
        <Typography margin={2}>
          ESTA CARTA LA ESCRIBO CON DEMASIADOS SENTIMIENTOS, PUES TE AMO UN MONTON 
        </Typography>   
        
        <Typography
          textAlign="justify"
          marginX={1}
          marginTop={1}
          level="h1"
          textColor="34312D"
          variant="soft"
          color="warning"
        >
          A VECES SIENTO QUE
        </Typography>
        <Typography margin={2}>
          UN TE AMO NO BASTA PARA HACERTE SENTIR LA CHICA MAS AMADA DE TODOOOO EL MUNDO 
        </Typography>       

                <Typography
          textAlign="justify"
          marginX={1}
          marginTop={1}
          level="h1"
          textColor="34312D"
          variant="soft"
          color="warning"
        >
          NO CUIDO MI HABITO DE SUEÑO PARA ESTAR CONTIGO
        </Typography>
        <Typography margin={2}>
          SE QUE ESTA MAL DORMIR POCO PERO LA VERDAD HABLAR CONTIGO ME HACE MUY FELIZ
        </Typography>           

        <Typography
          textAlign="justify"
          marginX={1}
          marginTop={1}
          level="h1"
          textColor="34312D"
          variant="soft"
          color="warning"
        >
          YO SOLO QUIERO
        </Typography>
        <Typography margin={2}>
          TENER UN BUEN TRABAJO PARA PODER VIVIR FELICES LOS DOS JUNTOS Y 
          EN UN FUTURO TENER HIJOS Y AMARTE TODA MI VIDA PERO TAMBIEN
        </Typography>           

        <Typography
          textAlign="justify"
          marginX={1}
          marginTop={1}
          level="h1"
          textColor="34312D"
          variant="soft"
          color="warning"
        >
          UNA VIDA NO BASTA PARA AMARTE EN ELLA
        </Typography>
        <Typography margin={2}>
          SINCERAMENTE QUIERO AMARTE EN ESTA VIDA Y EN TODAS
        </Typography>           

        <Typography
          textAlign="justify"
          marginX={1}
          marginTop={1}
          level="h1"
          textColor="34312D"
          variant="soft"
          color="warning"
        >
          ME ENCANTA QUE
        </Typography>
        <Typography margin={2}>
          ME DIBUJES CON EL AMOR DE MI VIDA, CON MIS OJITOS MARRONES
        </Typography>

        <Typography
          textAlign="justify"
          marginX={1}
          marginTop={1}
          level="h1"
          textColor="34312D"
          variant="soft"
          color="warning"
        >
          EN FIN, AMO A MI NOVIA HERMOSA Y QUIERO QUE ESTE DIA SEA PARA ELLA
        </Typography>
        <Typography margin={2}>
          eres lo mejor que me pudo pasar en mi vida, pero mi vida eres tú &lt;3
        </Typography>
        </Box>

        <Typography
          textAlign="justify"
          marginX={1}
          marginTop={1}
          level="h1"
          textColor="34312D"
          variant="soft"
          color="warning"
        >
          MIS OJOS MIRAN A LOS TUYOS PERO MI ALMA MIRA A TU CORAZON &lt;3
        </Typography>

        <Typography
          textAlign="justify"
          marginX={1}
          marginTop={5}
          level="h1"
          textColor="34312D"
          variant="soft"
          color="warning"
        >
          QUIERO QUE RECUERDES QUE...
        </Typography>
        <Box margin={2}>
        <Card  variant="soft" color="warning" sx={{ minHeight: 150, minWidth: 250, height:250, width: 300 }}>
              <CardCover>
                <img
                  src="https://i.imgur.com/V20Wp1H.jpeg"
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'fill' }} // Ajustar estilo de la imagen
                />
              </CardCover>
              <CardContent>

              </CardContent>
            </Card>
            <Typography marginTop={3} level='h3' variant='soft' color='warning' textAlign={'justify'}>Quiero que esta cancion suene toda tu vida</Typography>
</Box>

            <Box margin={2} marginTop={3}>
        <Card  variant="soft" color="warning" sx={{ minHeight: 120, minWidth: 300, height:120, width: 300 }}>
              <CardCover>
                <img
                  src="https://i.imgur.com/gsfFzua.png"
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'fill' }} // Ajustar estilo de la imagen
                />
              </CardCover>
              <CardContent>

              </CardContent>
            </Card>
            <Box marginY={2}>
            <Typography marginBottom={2} level='h3' variant='soft' color='warning' textAlign={'justify'}>NUNCA TE DEJES ROBAR LO QUE TE HACE BRILLAR</Typography>

            <Card  variant="soft" color="warning" sx={{ minHeight: 150, minWidth: 300, height:150, width: 300 }}>
              <CardCover>
                <img
                  src="https://i.imgur.com/wrMEMU9.jpeg"
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'fill' }} // Ajustar estilo de la imagen
                />
              </CardCover>
              <CardContent>

              </CardContent>
            </Card>
            <Typography marginTop={2} level='h3' variant='soft' color='warning' textAlign={'justify'}>AMO A MI NOVIA COMO ELLA AMA AL KPOP Y AL ROBLOX, TE AMO Y FELIZ SAN VALENTIN MI VIDA</Typography>

            </Box>
            </Box>
      {//https://i.imgur.com/wrMEMU9.jpeg https://i.imgur.com/V20Wp1H.jpeg
      }
    </> 
  ); 
}

export default App;
