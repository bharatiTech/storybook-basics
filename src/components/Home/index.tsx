export const Home = (props: any) =>{
  const {color, colorName, fontSize, padding} = props;

  return(
    <div style={{backgroundColor: `${color}`}}>
      <h2 style={{
        fontSize: `${fontSize}`,
        padding: `${padding}`,
        color: '#000'
      }}
      >
        Hello Storybook World! <br/> {colorName}
      </h2>
    </div>
  )
}
