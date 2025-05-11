
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import { Pizza, Beer, Wine } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export const InvitationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    attending: 'yes', // Default value
    foodPreference: '',
    otherFood: '',
    drinkPreference: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    setIsSubmitting(true);
    
    // Send data via email using a simple form submission to formsubmit.co
    const formElement = document.createElement('form');
    formElement.method = 'POST';
    formElement.action = 'https://formsubmit.co/nickiskick@gmail.com';
    formElement.style.display = 'none';
    
    // Create hidden fields for the form data
    const attendingField = document.createElement('input');
    attendingField.type = 'hidden';
    attendingField.name = 'Attending';
    attendingField.value = formData.attending;
    formElement.appendChild(attendingField);
    
    const foodField = document.createElement('input');
    foodField.type = 'hidden';
    foodField.name = 'Food Preference';
    foodField.value = formData.foodPreference === 'Others' ? formData.otherFood : formData.foodPreference;
    formElement.appendChild(foodField);
    
    const drinkField = document.createElement('input');
    drinkField.type = 'hidden';
    drinkField.name = 'Drink Preference';
    drinkField.value = formData.drinkPreference;
    formElement.appendChild(drinkField);
    
    // Add AJAX setting to formsubmit
    const ajaxField = document.createElement('input');
    ajaxField.type = 'hidden';
    ajaxField.name = '_captcha';
    ajaxField.value = 'false';
    formElement.appendChild(ajaxField);
    
    // Set return URL to current page
    const returnField = document.createElement('input');
    returnField.type = 'hidden';
    returnField.name = '_next';
    returnField.value = window.location.href;
    formElement.appendChild(returnField);
    
    // Append the form to the body
    document.body.appendChild(formElement);
    
    // Submit the form
    formElement.submit();
    
    // Show success message
    toast({
      title: "Thank you for responding!",
      description: "Can't wait to see you at the party!",
    });
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Clean up - remove the form
    setTimeout(() => {
      document.body.removeChild(formElement);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-love-soft-peach to-white">
        <div className="bg-white/90 backdrop-blur-md w-full max-w-md p-8 rounded-3xl shadow-xl text-center space-y-6 animate-bounce-in border-2 border-pink-200">
          <div className="flex justify-center">
            <div className="relative">
              <span className="absolute -top-10 -left-10 text-4xl animate-float">🎉</span>
              <span className="absolute -top-8 -right-10 text-4xl animate-float" style={{ animationDelay: '0.5s' }}>🥳</span>
              <h2 className="text-4xl font-bubblegum bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">Yay!</h2>
            </div>
          </div>
          <p className="text-2xl text-pink-600 font-medium">Thanks for responding, Sam!</p>
          <p className="text-lg">Can't wait to see you at the party!</p>
          <div className="pt-4">
            <Button 
              variant="outline" 
              className="bg-love-soft-pink hover:bg-love-soft-purple text-pink-600 font-medium transform transition-transform duration-300 hover:scale-105"
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
    <div className="min-h-screen flex items-center justify-center py-12 px-4 bg-gradient-to-br from-love-soft-peach to-white">
      <div 
        className="bg-white/90 backdrop-blur-md w-full max-w-md p-8 rounded-3xl shadow-xl animate-slide-in border-2 border-pink-200"
        style={{ animationDelay: '0.2s' }}
      >
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4 text-center">
            <div className="flex justify-center">
              <span className="text-4xl mb-2">🎂</span>
            </div>
            <h2 className="text-3xl font-bubblegum bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
              You're invited to Nikhil's Birthday!
            </h2>
            <p className="text-gray-600 text-sm">May 12th, 2025 • 10:00 PM</p>
          </div>
          
          {/* Question 1 */}
          <div className="space-y-3 animate-slide-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bubblegum text-pink-500">Are you coming to the Party?</h3>
            <RadioGroup defaultValue="yes" className="flex flex-col space-y-1">
              <div className="flex items-center space-x-2 rounded-full bg-love-soft-yellow p-3 px-5 transform transition-transform duration-300 hover:scale-105 hover:shadow-md">
                <RadioGroupItem value="yes" id="attending-yes" className="text-pink-500" />
                <Label htmlFor="attending-yes" className="font-medium">Sure, why not, Nikhil!(Neek inko option ledhu Saaam 😉)</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Question 2 */}
          <div className="space-y-3 animate-slide-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-xl font-bubblegum text-pink-500">Em thintav Saaaammm ?</h3>
            <RadioGroup value={formData.foodPreference} onValueChange={handleFoodChange} className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2 rounded-full bg-love-soft-blue p-3 px-5 transform transition-transform duration-300 hover:scale-105 hover:shadow-md">
                <RadioGroupItem value="Pizza" id="food-pizza" className="text-pink-500" />
                <Label htmlFor="food-pizza" className="font-medium flex items-center">
                  <Pizza size={24} className="mr-2 text-pink-400" /> Pizza
                </Label>
              </div>
              <div className="flex items-center space-x-2 rounded-full bg-love-soft-blue p-3 px-5 transform transition-transform duration-300 hover:scale-105 hover:shadow-md">
                <RadioGroupItem value="Chicken Biryani" id="food-chicken" className="text-pink-500" />
                <Label htmlFor="food-chicken" className="font-medium">Chicken Biryani</Label>
              </div>
              <div className="flex items-center space-x-2 rounded-full bg-love-soft-blue p-3 px-5 transform transition-transform duration-300 hover:scale-105 hover:shadow-md">
                <RadioGroupItem value="Veg Biryani" id="food-veg" className="text-pink-500" />
                <Label htmlFor="food-veg" className="font-medium">Veg Biryani</Label>
              </div>
              <div className="flex items-center space-x-2 rounded-full bg-love-soft-blue p-3 px-5 transform transition-transform duration-300 hover:scale-105 hover:shadow-md">
                <RadioGroupItem value="Pasta" id="food-pasta" className="text-pink-500" />
                <Label htmlFor="food-pasta" className="font-medium">Pasta</Label>
              </div>
              <div className="flex items-center space-x-2 rounded-full bg-love-soft-blue p-3 px-5 transform transition-transform duration-300 hover:scale-105 hover:shadow-md">
                <RadioGroupItem value="Others" id="food-others" className="text-pink-500" />
                <Label htmlFor="food-others" className="font-medium">Others</Label>
              </div>
              
              {formData.foodPreference === 'Others' && (
                <div className="pl-8 pt-2 animate-fade-in">
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
            <RadioGroup value={formData.drinkPreference} onValueChange={handleDrinkChange} className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2 rounded-full bg-love-soft-purple p-3 px-5 transform transition-transform duration-300 hover:scale-105 hover:shadow-md">
                <RadioGroupItem value="Alcohol" id="drink-alcohol" className="text-pink-500" />
                <Label htmlFor="drink-alcohol" className="font-medium">Alcohol</Label>
              </div>
              <div className="flex items-center space-x-2 rounded-full bg-love-soft-purple p-3 px-5 transform transition-transform duration-300 hover:scale-105 hover:shadow-md">
                <RadioGroupItem value="Wine" id="drink-wine" className="text-pink-500" />
                <Label htmlFor="drink-wine" className="font-medium flex items-center">
                  <Wine size={24} className="mr-2 text-pink-400" /> Wine
                </Label>
              </div>
              <div className="flex items-center space-x-2 rounded-full bg-love-soft-purple p-3 px-5 transform transition-transform duration-300 hover:scale-105 hover:shadow-md">
                <RadioGroupItem value="Beer" id="drink-beer" className="text-pink-500" />
                <Label htmlFor="drink-beer" className="font-medium flex items-center">
                  <Beer size={24} className="mr-2 text-pink-400" /> Beer
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="pt-6 animate-slide-in" style={{ animationDelay: '1s' }}>
            <Button 
              type="submit" 
              className="w-full rounded-full bg-gradient-to-r from-pink-400 to-pink-500 text-white font-bubblegum text-lg py-6 hover:from-pink-500 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Can't wait to see you!"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InvitationForm;
