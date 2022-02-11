import { Paper, Typography } from "@mui/material"

interface Props {
  title: string
}

const StatsPaper = (props: Props) => {
  const { title } = props
  return <Paper>
    <Typography variant="h3" gutterBottom component="div">{title}</Typography>
  </Paper>
}

export default StatsPaper