# Meals App

A React Native mobile application for browsing and discovering delicious recipes across various cuisines. The app features a beautiful dark theme UI and provides detailed information about meals, including ingredients, preparation steps, and dietary information.

## Features

- 🍽️ Browse meals by categories
- 📱 Responsive and modern UI with dark theme
- 🔍 Detailed meal information including:
  - Ingredients list
  - Step-by-step preparation instructions
  - Cooking duration
  - Complexity level
  - Affordability
  - Dietary restrictions (gluten-free, vegan, vegetarian, lactose-free)
- 🖼️ High-quality food images
- 🎨 Beautiful category cards with images
- 📱 Smooth navigation between screens

## Screens

1. **Categories Screen**
   - Grid layout of food categories
   - Each category shows a representative image
   - Smooth navigation to category meals

2. **Meals Overview Screen**
   - Displays meals filtered by category
   - Grid layout of meal cards
   - Quick view of meal details

3. **Meal Details Screen**
   - Comprehensive meal information
   - Ingredients list
   - Preparation steps
   - Dietary information
   - Cooking duration and complexity

## Tech Stack

- React Native
- Expo Router for navigation
- TypeScript for type safety
- React Native Vector Icons
- React Native's built-in components

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI
- iOS Simulator (for Mac) or Android Emulator

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MrMuhammad69/ordereat.git
cd ordereat
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npx expo start
```

4. Run on your preferred platform:
- Press `i` for iOS simulator
- Press `a` for Android emulator
- Scan QR code with Expo Go app on your physical device

## Project Structure

```
src/
├── app/                    # Expo Router pages
│   ├── index.tsx          # Categories screen
│   ├── meals/             # Meal details screens
│   └── meals-overview/    # Category meals screens
├── components/            # Reusable components
├── models/               # Data models
└── data.ts              # Sample data
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Food images from Unsplash
- Icons from Expo Vector Icons
