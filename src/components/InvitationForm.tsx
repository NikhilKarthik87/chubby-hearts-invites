
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import { Pizza, Beer, Wine, ArrowUp, Utensils, Salad } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

// Custom chicken icon since lucide doesn't have ChickenThighs
const ChickenIcon = ({ size = 20, className }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M10.5 15.5c1 1 2.3 2.3 3.5 2.3 3.5 0 4.5-4 4.5-7 0-3.5-2.7-5.8-5.8-5.8-4 0-7 3-7 7 0 3.2 1.3 4.2 2.3 5.5" />
    <path d="M8.5 10.5c-.8.8-2.3 1.8-3 2.3-.7.4-1.6.9-2 1.5-.3.5-.3 1-.2 1.6.2.9 1 1.6 2 1.6h1.1c.9 0 1.8-.5 2.3-1.1" />
    <path d="m9 12 1 1.5" />
    <path d="M12.5 9.5 16 13" />
    <path d="M15 8c-.6-.6-1-1.3-1-2.3 0 0 0-1.2 1.5-1.2 1.3 0 1.8 1.2 1.8 1.2" />
  </svg>
);

// Custom pasta icon since lucide doesn't have Pasta
const PastaIcon = ({ size = 20, className }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 14c1-5 3.5-6 6-6 4 0 5 3.5 9 3.5 2 0 3-.5 4-2" />
    <path d="M4 18c1-5 3.5-6 6-6 4 0 5 3.5 9 3.5 2 0 3-.5 4-2" />
    <path d="M3 10c0-3.5 2.5-6.5 6-6.5 4 0 5 3.5 9 3.5 2 0 3-.5 4-2" />
  </svg>
);

export const InvitationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    attending: 'yes', // Default value
    foodPreference: '',
    otherFood: '',
    drinkPreference: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFoodChange = (value: string) => {
    setFormData({ ...formData, foodPreference: value });
  };

  const handleDrinkChange = (value: string) => {
    setFormData({ ...formData, drinkPreference: value });
  };

  const handleOtherFoodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, otherFood: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.foodPreference) {
      toast({
        title: "Please select a food preference",
        variant: "destructive"
      });
      return;
    }

    if (formData.foodPreference === 'Others' && !formData.otherFood) {
      toast({
        title: "Please specify your other food preference",
        variant: "destructive"
      });
      return;
    }

    if (!formData.drinkPreference) {
      toast({
        title: "Please select a drink preference",
        variant: "destructive"
      });
      return;
    }

    // Log the submission
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: "Thank you for responding!",
      description: "Can't wait to see you at the party!",
    });
    
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white/80 backdrop-blur-md w-full max-w-md p-8 rounded-3xl shadow-lg text-center space-y-6 animate-bounce-in">
          <h2 className="text-3xl font-bubblegum text-pink-500">Yay! 🎉</h2>
          <p className="text-xl text-pink-600 font-medium">Thanks for responding, Sam!</p>
          <p className="text-lg">Can't wait to see you at the party!</p>
          <div className="pt-4">
            <Button 
              variant="outline" 
              className="bg-love-soft-pink hover:bg-love-soft-purple text-pink-600 font-medium"
              onClick={() => setIsSubmitted(false)}
            >
              Edit Response
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div 
        className="bg-white/80 backdrop-blur-md w-full max-w-md p-8 rounded-3xl shadow-lg animate-slide-in"
        style={{ animationDelay: '0.2s' }}
      >
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bubblegum text-pink-500 text-center">You're invited to Nikhil's Birthday!</h2>
          </div>
          
          {/* Question 1 */}
          <div className="space-y-3 animate-slide-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bubblegum text-pink-500">Are you coming to the Party?</h3>
            <RadioGroup defaultValue="yes" className="flex flex-col space-y-1">
              <div className="flex items-center space-x-2 rounded-full bg-love-soft-yellow p-2 px-4">
                <RadioGroupItem value="yes" id="attending-yes" className="text-pink-500" />
                <Label htmlFor="attending-yes" className="font-medium">Sure, why not, Nikhil! (Neek inko option ledhu Saaam 😉)</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Question 2 */}
          <div className="space-y-3 animate-slide-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-xl font-bubblegum text-pink-500">Em thintav Saaaammm ?</h3>
            <RadioGroup value={formData.foodPreference} onValueChange={handleFoodChange} className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2 rounded-full bg-love-soft-blue p-2 px-4">
                <RadioGroupItem value="Pizza" id="food-pizza" className="text-pink-500" />
                <Label htmlFor="food-pizza" className="font-medium flex items-center">
                  <Pizza size={20} className="mr-2" /> Pizza
                </Label>
              </div>
              <div className="flex items-center space-x-2 rounded-full bg-love-soft-blue p-2 px-4">
                <RadioGroupItem value="Chicken Biryani" id="food-chicken" className="text-pink-500" />
                <Label htmlFor="food-chicken" className="font-medium flex items-center">
                  <ChickenIcon size={20} className="mr-2" /> Chicken Biryani
                </Label>
              </div>
              <div className="flex items-center space-x-2 rounded-full bg-love-soft-blue p-2 px-4">
                <RadioGroupItem value="Veg Biryani" id="food-veg" className="text-pink-500" />
                <Label htmlFor="food-veg" className="font-medium flex items-center">
                  <Salad size={20} className="mr-2" /> Veg Biryani
                </Label>
              </div>
              <div className="flex items-center space-x-2 rounded-full bg-love-soft-blue p-2 px-4">
                <RadioGroupItem value="Pasta" id="food-pasta" className="text-pink-500" />
                <Label htmlFor="food-pasta" className="font-medium flex items-center">
                  <PastaIcon size={20} className="mr-2" /> Pasta
                </Label>
              </div>
              <div className="flex items-center space-x-2 rounded-full bg-love-soft-blue p-2 px-4">
                <RadioGroupItem value="Others" id="food-others" className="text-pink-500" />
                <Label htmlFor="food-others" className="font-medium">Others</Label>
              </div>
              
              {formData.foodPreference === 'Others' && (
                <div className="pl-8 pt-2">
                  <Input 
                    type="text" 
                    placeholder="Inkemana Kaavala cheppu thechedham" 
                    value={formData.otherFood} 
                    onChange={handleOtherFoodChange}
                    className="rounded-full border-pink-200 focus:border-pink-500 focus:ring-pink-500"
                  />
                </div>
              )}
            </RadioGroup>
          </div>

          {/* Question 3 */}
          <div className="space-y-3 animate-slide-in" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-xl font-bubblegum text-pink-500">Em thaaguthav Saaaaammmm</h3>
            <RadioGroup value={formData.drinkPreference} onValueChange={handleDrinkChange} className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2 rounded-full bg-love-soft-purple p-2 px-4">
                <RadioGroupItem value="Alcohol" id="drink-alcohol" className="text-pink-500" />
                <Label htmlFor="drink-alcohol" className="font-medium flex items-center">
                  <ArrowUp size={20} className="mr-2" /> Alcohol
                </Label>
              </div>
              <div className="flex items-center space-x-2 rounded-full bg-love-soft-purple p-2 px-4">
                <RadioGroupItem value="Wine" id="drink-wine" className="text-pink-500" />
                <Label htmlFor="drink-wine" className="font-medium flex items-center">
                  <Wine size={20} className="mr-2" /> Wine
                </Label>
              </div>
              <div className="flex items-center space-x-2 rounded-full bg-love-soft-purple p-2 px-4">
                <RadioGroupItem value="Beer" id="drink-beer" className="text-pink-500" />
                <Label htmlFor="drink-beer" className="font-medium flex items-center">
                  <Beer size={20} className="mr-2" /> Beer
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="pt-6 animate-slide-in" style={{ animationDelay: '1s' }}>
            <Button 
              type="submit" 
              className="w-full rounded-full bg-gradient-to-r from-pink-400 to-pink-500 text-white font-bubblegum text-lg py-6 hover:from-pink-500 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InvitationForm;
