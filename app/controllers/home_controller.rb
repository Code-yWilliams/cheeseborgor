class HomeController < SecuredApplicationController
  def show
    username = params[:username]
    render inertia: "InertiaExample", props: { isOwner: current_user.username == username }
  end
end
