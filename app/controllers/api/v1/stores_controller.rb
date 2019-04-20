# frozen_string_literal: true

class Api::V1::StoresController < ApplicationController
  def index
    stores = Store.all
    render json: { status: "SUCCESS", data: stores }, status: :ok
  end
end
