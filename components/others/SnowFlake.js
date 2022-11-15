const SnowFlake = (props) => {
  return (
    <p className="Snowflake" id={`item${props.id}`} style={props.style}>
      *
    </p>
  );
};

export default SnowFlake;

// // Snow Animation copied from @Learndailyteam

// const snow = () => {
//   let animationDelay = "0s";
//   let fontSize = "100px";
//   let arr = Array.from(
//     "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
//   );

//   return arr.map((el, i) => {
//     animationDelay = `${(Math.random() * 16).toFixed(2)}s`;
//     fontSize = `${Math.floor(Math.random() * 10) + 10}px`;
//     let style = {
//       animationDelay,
//       fontSize,
//     };

//     return <SnowFlake key={i} id={i} style={style} />;
//   });
// };

//  // **************************************

// <div className="indexHighlight">{snow()}</div>
