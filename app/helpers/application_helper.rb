module ApplicationHelper
  def current_user
    User.find_by(email: session[:userinfo]["email"]) if session[:userinfo].present?
  end
end
