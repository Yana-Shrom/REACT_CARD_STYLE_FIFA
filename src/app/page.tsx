import Card from "./components/Card";


export default function Home() {
  return (
    <main style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <Card
        frontImage="/assets/curry2.png"
        playerFName="STEPHEN"
        playerLName="CURRY"
        overall={96}
        position="PG"
        nationFlag="/assets/usa.png"
        clubLogo="/assets/gsw.jpg"
        backStats={{
          speed: 88,
          shoot: 99,
          pass: 92,
          handling: 97,
          defense: 75,
          physical: 83,
        }}
      />
    </main>
  );
}
 