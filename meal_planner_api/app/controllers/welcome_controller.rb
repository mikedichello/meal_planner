class WelcomeController < ApplicationController
    def index 
        render json: {status: 200, mesage: "Pie Charter API"}
    end
end
