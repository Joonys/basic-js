module.exports = class DepthCalculator {
    calculateDepth(arr) {
        
        if (Array.isArray(arr)) {
           
            arr = arr.filter(val => Array.isArray(val));
            let intensity = 0;
            for (let i = 0; i < arr.length; i++)
              
                intensity = Math.max(intensity, this.calculateDepth(arr[i]));

            return 1 + intensity;
        }
       
        return 0;
    }
};