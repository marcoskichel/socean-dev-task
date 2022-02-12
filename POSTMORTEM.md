# TODO: Format this properly

difficulties:
 - To implement server side cache for emotion (mui):
   I solved it by following the official MUI docs and checking their example for nextjs (https://github.com/mui/material-ui/blob/81b2659a4573fc70044542b6dafd85829c300654/examples/nextjs)

decisions:
- CSS framework: Initially I was going to use CSS modules, but I decided to stick with emotion for two reasons:
  1. I wanted to learn more about it since I never used it before.
  2. I like the idea of having the CSS and JS code in the same file, as long as the component remains small and self-contained, IMO it makes the overall experience a lot better without the need to navigate through multiple files to understand how the styles applies to each component.

- To separate the data provision from the components/containers: Even though this project consists of just a POC, I decided to write it as if it would be extended in the future, with that said I moved the data provision layer to separated context provider components so that it could be consumed in the future by other components interested in that kind of data.