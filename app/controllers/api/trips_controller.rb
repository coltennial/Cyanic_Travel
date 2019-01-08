class Api::TripsController < ApplicationController
  before_action :set_trip, only: [:show]
  before_action :set_location

  def index 
    render json: @location.trips.all
  end

  def show 
    render json: @trip
  end

  private 

    def set_trip 
      @trip = Trip.find(params[:id])
    end

    def set_location 
      @location = Location.find(params[:location_id])
    end

    def trip_params 
      params.require(:trip).permit(:name, :start_date, :end_date, :picture)
    end
end
