class HomeController < ApplicationController
  include Secured
  def index
    render inertia: "InertiaExample"
  end

  def public
  end
end
