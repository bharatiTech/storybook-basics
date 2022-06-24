import { rest } from "msw";

const getCharacterData = (id: any) =>{
  switch (id) {
    case "1":
      return {
        name: "Luke Skywalker",
        height: "172",
        hair_color: "blond",
      };
    case "2":
      return {
        name: "C-3PO",
        height: "n/a",
        hair_color: "n/a",
      };
    case "3":
      return {
        name: "R2-D2",
        height: "96",
        hair_color: "purple",
      };
    case "4":
      return {
        name: "Darth Vader",
        height: "202",
        hair_color: "blue",
      };
    case "5":
      return {
        name: "Leia Organa",
        height: "150",
        hair_color: "brown",
      };
    case "6":
      return {
        name: "Bharati Gogoi",
        height: "150",
        hair_color: "black",
      }
    default:
      return { name: "NaN", height: "NaN", hair_color: "NaN" };
  }
}

export const handler = [
  rest.get("https://swapi.dev/api/people/:id", (req, res, ctx) => {
    return res(ctx.json(getCharacterData(req.params.id)));
  }),
];

//   rest.get("https://swapi.dev/api/people/1", (req, res, ctx) => {
//     return res(ctx.json({
//       name: "Bharati Gogoi",
//       height: "150",
//       hair_color: "black",
//       address: 'panjabari',
//       bloodGroup: 'o+'
//     }))
//   }),
//   rest.get('https://swapi.dev/api/people/2', (req, res, ctx) =>
//     res(ctx.json({
//       name: "Trishna Gogoi",
//       height: "153",
//       hair_color: "black",
//       address: 'panjabari',
//       bloodGroup: 'o+'
//     }))
//   )
// ];
