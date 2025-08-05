async function slowPage() {
  // Simulate a slow loading page
  await new Promise(resolve => setTimeout(resolve, 5000)); // 5 seconds
}

export default async function TestLoadingPage() {
  await slowPage();
  
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Loading Test Complete!</h1>
      <p>You should have seen the loading page for 5 seconds.</p>
    </div>
  );
}