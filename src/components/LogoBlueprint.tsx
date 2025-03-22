const LogoBlueprint = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      {/* Left side - Main Blueprint */}
      <div className="aspect-square relative">
        <img 
          src="/images/blueprint-main.png" 
          alt="Logo Design Blueprint" 
          className="w-full h-full object-contain"
        />
        {/* Grid lines and measurements */}
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
          {/* Grid lines are part of the image */}
        </div>
      </div>

      {/* Right side - Construction Process */}
      <div className="grid grid-cols-2 gap-8">
        <div className="aspect-square">
          <img 
            src="/images/blueprint-process.png" 
            alt="Logo Construction Process" 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="aspect-square">
          <img 
            src="/images/blueprint-final.png" 
            alt="Final Logo" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoBlueprint; 