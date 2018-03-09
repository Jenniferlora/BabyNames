class NamesController < ApplicationController
	def index
    names = Name.all
    render json: names
  end

  def show
    name = Name.find(params[:id])
    render json: name
  end

  def create
    name = Name.create!(name_params)
    render json: name
  end

  def update
    name = Name.find(params[:id])
    name.update!(name_params)
    render json: name
  end

  def destroy
    name = Name.find(params[:id])
    name.destroy
    render plain: "name removed from favorites"
  end

  private

  def name_params
    params.require(:name).permit(:name, :sex)
  end

end
