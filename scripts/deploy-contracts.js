const { ethers } = require("hardhat");

async function main() {
  console.log("Deploying JobPortal contract...");

  // Get the contract factory
  const JobPortal = await ethers.getContractFactory("JobPortal");
  
  // Deploy the contract
  const jobPortal = await JobPortal.deploy();
  
  // Wait for deployment to finish
  await jobPortal.deployed();

  console.log("JobPortal deployed to:", jobPortal.address);
  
  // Log contract stats
  const stats = await jobPortal.getContractStats();
  console.log("Contract Stats:", {
    totalJobs: stats.totalJobs.toString(),
    totalRevenue: ethers.utils.formatEther(stats.totalRevenue_),
    currentFee: ethers.utils.formatEther(stats.currentFee),
    contractBalance: ethers.utils.formatEther(stats.contractBalance)
  });

  return jobPortal.address;
}

// Handle errors
main()
  .then((address) => {
    console.log("Deployment successful! Contract address:", address);
    process.exit(0);
  })
  .catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
  }); 