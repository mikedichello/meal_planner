class WelcomeController < ApplicationController
    def index 
        render json: {status: 200, message: "Pie Charter API"}
    end
end
