import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.title}>
        <h1>LIBROS DE HENNING MANKELL</h1>
      </div>
      <div className={styles.main}>
        <div className={styles.photo}>
          <img
            src='/Images/Henning Mankell.jpg'
            alt='Henning Mankell'
          />
        </div>
        <div className={styles.text1}>
          <p>
            Nacido en Estocolmo(Suecia) en 1948, Henning Mankell ha cultivado
            diversos géneros dentro de una variada narrativa que contempla obras
            de teatro y narraciones dirigidas a un público infantil y juvenil,
            entre las que cabe citar{' '}
            <em>El perro que corría hacia una estrella</em>,{' '}
            <em>Las sombras crecen al atardecer</em> y{' '}
            <em>El niño que dormía con nieve en la cama.</em>
          </p>
          <br />
          <p>
            Considerado uno de los escritores suecos de mayor renombre en el
            panorama literario europeo, su consagración definitiva le llegó de
            la mano de la serie de novelas policíacas protagonizadas por el
            detective Kurt Wallander. Una exitosa creación literaria que incluye
            a <em>Asesinos sin rostro</em> - premio a la mejor historia
            policíaca de 1991 otorgado por la Academia Sueca de Novela Negra,
            además de conquistar el prestigioso premio Llave de Cristal-,{' '}
            <em>Los perros de Riga</em>(1992),
            <em>La leona blanca</em>(1993), <em>El hombre sonriente</em>(1994),{' '}
            <em>La falsa pista</em>(1995)-Premio Macallan Gold Dagger a la mejor
            Novela Negra publicada en Gran Bretaña en el año 2000-,{' '}
            <em>La quinta mujer</em>(1996),
            <em>Pisando los talones</em>(1997) y <em>Cortafuegos</em>(1998).
          </p>
        </div>
      </div>

      <div className={styles.gallery}>
        <img
          src='/Images/Botas de lluvia suecas.jpg'
          alt='Botas de lluvia suecas'
        />
        <img
          src='/Images/El chino.jpg'
          alt='El chino'
        />
        <img
          src='/Images/El hombre de la dinamita.jpg'
          alt='El hombre de la dinamita'
        />
        <img
          src='/Images/El perro que corría hacia una estrella.jpg'
          alt='El perro que corría hacia una estrella'
        />
        <img
          src='/Images/Zapatos italianos.jpg'
          alt='Zapatos italianos'
        />
        <img
          src='/Images/Arenas movedizas.jpg'
          alt='Arenas movedizas'
        />
        <img
          src='/Images/Asesinos sin rostro.jpg'
          alt='Asesinos sin rostro'
        />
        <img
          src='/Images/El secreto del fuego.jpg'
          alt='El secreto del fuego'
        />
        <img
          src='/Images/La leona blanca.jpg'
          alt='La leona blanca'
        />
      </div>
    </div>
  )
}

export default Home
