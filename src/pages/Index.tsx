
import CloudAnimation from '@/components/CloudAnimation';
import InvitationForm from '@/components/InvitationForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-love-soft-peach to-love-soft-pink">
      <section id="intro" className="min-h-screen">
        <CloudAnimation />
      </section>
      
      <section id="form" className="min-h-screen">
        <InvitationForm />
      </section>
    </div>
  );
};

export default Index;
