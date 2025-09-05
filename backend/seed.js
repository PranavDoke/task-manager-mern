const mongoose = require('mongoose');
const User = require('./models/User');
const Task = require('./models/Task');
require('dotenv').config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Task.deleteMany({});

    // Create sample user
    const user = new User({
      username: 'demo',
      email: 'demo@example.com',
      password: 'password123'
    });
    await user.save();

    // Create sample tasks
    const sampleTasks = [
      {
        title: 'Complete project documentation',
        description: 'Write comprehensive README and API documentation',
        status: 'pending',
        userId: user._id
      },
      {
        title: 'Review code changes',
        description: 'Review pull requests and provide feedback',
        status: 'complete',
        userId: user._id
      },
      {
        title: 'Deploy to production',
        description: 'Deploy the application to production server',
        status: 'pending',
        userId: user._id
      },
      {
        title: 'Update dependencies',
        description: 'Update all npm packages to latest versions',
        status: 'pending',
        userId: user._id
      },
      {
        title: 'Write unit tests',
        description: 'Add comprehensive test coverage for all components',
        status: 'complete',
        userId: user._id
      }
    ];

    await Task.insertMany(sampleTasks);

    console.log('Sample data created successfully!');
    console.log('Demo user credentials:');
    console.log('Email: demo@example.com');
    console.log('Password: password123');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();