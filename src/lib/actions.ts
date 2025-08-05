'use server';

import { internalServerLogic } from './server-utils';

// This file contains server actions that run on the server
// Only minimal interfaces are exposed to client

export async function performServerAction() {
  // 🚨 IMMEDIATE TEST - This should show up in terminal
  console.log('='.repeat(50));
  console.log('🚨 SERVER ACTION CALLED - YOU SHOULD SEE THIS!');
  console.log('='.repeat(50));
  
  // Delegate sensitive operations to internal modules
  await internalServerLogic();
  
  // Return only safe data to client
  return {
    success: true,
    message: 'Server action completed successfully!',
    timestamp: new Date().toISOString(),
    serverInfo: 'This was processed on the server',
    publicInfo: 'Safe data that client can see'
  };
}

export async function anotherServerAction(data: { name: string; email: string }) {
  console.log('Processing user data on server:', data);
  
  // Simulate processing user data
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    success: true,
    message: `Hello ${data.name}, your data has been processed on the server!`
  };
}
