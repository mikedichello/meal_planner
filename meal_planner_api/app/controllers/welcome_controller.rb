class WelcomeController < ApplicationController
    def index 
        remder json: {status: 200, mesage: "Pie Charter API"}
end
