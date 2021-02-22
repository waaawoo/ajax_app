class PostsController < ApplicationController

  def index
    # @posts = Post.all
    # 降順表示にする
    @posts = Post.order(id: "DESC")
  end

  def new

  end

  def create
    Post.create(content: params[:content])
    # 投稿後にトップページへリダイレクトされるようにする
    rdirect_to action: :index

  end
end
