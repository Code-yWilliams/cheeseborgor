class HomeController < SecuredApplicationController
  def index
    render inertia: "InertiaExample"
  end
end
