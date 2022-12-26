import MailSent from './MailSent.svg';

type Props = {
    icon: string;
    color: string;
    width: number;
    height: number;
}

const Icon = ({ icon, color, width, height }: Props) => {
  return (
    <div style={{ width, height }}>
        {icon === 'mailSent' && <MailSent color={color} />}
    </div>
  )
}

export default Icon