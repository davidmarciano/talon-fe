import { CircularProgress, InputLabel as MaterialInputLabel} from '@mui/material';

const styles = { color: 'primary.main' };

interface Props {
  defaultText: string;
  isLoading: boolean;
  error: string;
}

const Content = ({ defaultText, isLoading, error }: Props) => {
  if(isLoading) return <CircularProgress size={"24px"} />;

  if(error) return <>{error}</>

  return <>{defaultText}</>
};

const InputLabel = (props: Props) => (
  <MaterialInputLabel id="events-label" sx={styles}>
    <Content {...props} />
  </MaterialInputLabel>
);

export default InputLabel;