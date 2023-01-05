class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid
    wrap_parameters format: []
    skip_before_action :authorized, only: [:create, :index] 

    def index
        render json: User.all
    end

    def show 
        user = User.find(session[:user_id])
        
        render json: user
    end

    def create
        user = User.create!(user_params)
       
        
        render json: user, status: :created

    end

    def update
        user = User.find(params[:id])
        User.update!(update_params)
        render json: user, status: :accepted
    end

    def destroy 
        user = User.find(params[:id]).destroy
        render json: User
    end


    private

    def update_params
        params.permit(:password)
    end

    def user_params 
        params.permit(:username, :password)
    end

    def render_record_invalid(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

    def record_not_found_response(exception)
     render json: {error: "User not found"}, status: :not_found 
 
    end
end
