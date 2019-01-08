class Api::AddressesController < ApplicationController
  before_action :set_address, only: [:show]
  before_action :set_trip

  def index 
    render json: @trip.addresss.all
  end

  def show 
    render json: @address
  end

  private 

    def set_address 
      @address = Address.find(params[:id])
    end

    def set_trip 
      @trip = Trip.find(params[:trip_id])
    end

    def trip_params 
      params.require(:trip).permit(:name, :start_date, :end_date)
    end
end
