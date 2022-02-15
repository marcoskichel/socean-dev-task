# TODO: Format this properly

difficulties:
 - To implement server side cache for emotion (mui):
   I solved it by following the official MUI docs and checking their example for nextjs (https://github.com/mui/material-ui/blob/81b2659a4573fc70044542b6dafd85829c300654/examples/nextjs)

decisions:
- CSS framework: Initially I was going to use CSS modules, but I decided to stick with emotion for two reasons:
  1. I wanted to learn more about it since I never used it before.
  2. I like the idea of having the CSS and JS code in the same file, as long as the component remains small and self-contained, IMO it makes the overall experience a lot better without the need to navigate through multiple files to understand how the styles applies to each component.

- To separate the data provision from the components/containers: Even though this project consists of just a POC, I decided to write it as if it would be extended in the future, with that said I moved the data provision layer to separated context provider components so that it could be consumed in the future by other components interested in that kind of data.

- I decided to keep the tab text centralized because it is more aligned with material design standards (sorry, but it hurts to see them not centered :sweat). I also didn't bother changing the format of the unstake options checkmarks as it is not easy to do with the current MUI version, I could have implemented a custom checkmark component with my own styles, but I think it would be an overkill for this POC project, I also believe that the current implementation is more aligned with Material Design standards, so I decided to keep it.




Possible improvements:

- Some of the MUI custom styles could have been done in the theme under `components.<componentName>.defaultProps.sx` for normalization sake.