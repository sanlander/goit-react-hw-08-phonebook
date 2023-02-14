import { FcMultipleSmartphones } from 'react-icons/fc';

const styles = {
  container: {
    minHeight: 'calc(100vh - 200px)',
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <FcMultipleSmartphones size={'60'} />
      <h1 style={styles.title}>Your phonebook manager</h1>
    </div>
  );
}
