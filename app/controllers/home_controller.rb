class HomeController < ApplicationController
  include Secured
  def index
    render inertia: "InertiaExample"
  end
end
